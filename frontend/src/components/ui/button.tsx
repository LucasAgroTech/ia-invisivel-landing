import { component$, Slot } from '@builder.io/qwik';

interface ButtonProps {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  class?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  onClick$?: () => void;
}

export default component$<ButtonProps>(({ 
  variant = 'primary', 
  size = 'md', 
  class: className = '',
  disabled = false,
  type = 'button',
  onClick$ 
}) => {
  const baseStyles = 'font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    primary: 'bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-400 hover:to-emerald-400 text-white focus:ring-cyan-500 transform hover:scale-105 active:scale-95',
    secondary: 'bg-transparent border-2 border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-white focus:ring-cyan-500'
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm rounded-lg',
    md: 'px-6 py-3 text-base rounded-lg',
    lg: 'px-8 py-4 text-lg rounded-xl'
  };

  return (
    <button
      type={type}
      class={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      disabled={disabled}
      onClick$={onClick$}
    >
      <Slot />
    </button>
  );
});