import * as React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

type Button = React.FC<ButtonProps>;
type ButtonType = 'basic' | 'action';

const BasicButton: Button = ({
  onClick, 
  children, 
  ...rest 
}) => (
  <button 
    onClick={onClick}
    {...rest}
  >
    {children}
  </button>
);

const ActionButton: Button = ({
  onClick,
  children,
  ...rest
}) => (
  <button
    onClick={onClick}
    {...rest}
    style={{
      background: 'black',
      color: 'gray',
      border: '1px solid darkgray',
    }}
  >
    {children}
  </button>
);

// 1. Creamos map com los types.
// 2. Se crea el objeto.

const renderButton = ( type: ButtonType ='basic', children: React.ReactNode, props: ButtonProps ) => {
  const buttonMap = {
    action: <ActionButton {...props}>
{children}</ActionButton>,
    basic: <BasicButton {...props}>
{children}</BasicButton>
  }
  return buttonMap[type];
}

// Pensar cómo reemplazamos el switch por una notación de objetos (object literal).

export const ButtonFactory = ({
  type,
  children,
  ...props
}: {
  type: ButtonType;
  children: React.ReactNode
}) => {
  // Usar, preferentemente Object Notation en vez de switch.
  /*
  switch (type) {
    case 'basic':
      return (
        <BasicButton {...props}>
          {children}
        </BasicButton>
      );
    case 'action':
      return (
        <ActionButton {...props}>
          {children}
        </ActionButton>
      );
    default:
      return (
        <BasicButton {...props}>
          {children}
        </BasicButton>
      );
  }
  */
 return renderButton(type, children, props as ButtonProps);
};