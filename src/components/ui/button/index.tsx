import React from 'react';

export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  disabled = false,
}) => {
  const baseStyles: React.CSSProperties = {
    padding: '14px 32px',
    borderRadius: '12px',
    border: 'none',
    cursor: disabled ? 'not-allowed' : 'pointer',
    fontSize: '1rem',
    fontWeight: '600',
    transition: 'all 0.3s ease',
    opacity: disabled ? 0.6 : 1,
    boxShadow: disabled ? 'none' : '0 4px 14px rgba(0, 0, 0, 0.1)',
  };

  const variantStyles: React.CSSProperties =
    variant === 'primary'
      ? {
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
        }
      : {
          background: 'white',
          color: '#667eea',
          border: '2px solid #667eea',
          boxShadow: 'none',
        };

  const styles = { ...baseStyles, ...variantStyles };

  return (
    <button
      style={styles}
      onClick={onClick}
      disabled={disabled}
      onMouseEnter={(e) => {
        if (!disabled) {
          if (variant === 'primary') {
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.15)';
          } else {
            e.currentTarget.style.background = '#667eea';
            e.currentTarget.style.color = 'white';
          }
        }
      }}
      onMouseLeave={(e) => {
        if (!disabled) {
          if (variant === 'primary') {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 14px rgba(0, 0, 0, 0.1)';
          } else {
            e.currentTarget.style.background = 'white';
            e.currentTarget.style.color = '#667eea';
          }
        }
      }}
    >
      {children}
    </button>
  );
};
