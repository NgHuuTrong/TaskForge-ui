import { Link } from 'react-router-dom';

function Button({
  children,
  disabled,
  to,
  size = 'medium',
  color = 'primary',
  classNames = '',
  onClick,
}) {
  const base =
    'border-[none] rounded-[--border-radius-sm] [box-shadow:var(--shadow-sm)] ';

  const sizes = {
    small:
      'text-[1.2rem] px-[0.8rem] py-[0.4rem] uppercase font-semibold text-center ',
    medium: 'text-[1.4rem] px-[1.6rem] py-[1.2rem] font-medium ',
    large: 'text-[1.6rem] px-[2.4rem] py-[1.2rem] font-medium ',
  };

  const colors = {
    primary:
      'text-[--color-brand-50] bg-[--color-brand-600] hover:bg-[--color-brand-700] ',
    secondary:
      'text-[--color-grey-600] bg-[--color-grey-0] border-[1px] border-[solid] border-[--color-grey-200] hover:bg-[--color-grey-100] ',
    danger:
      'text-[--color-red-100] bg-[--color-red-700] hover:bg-[--color-red-800]',
  };

  const allClass = base + sizes[size] + colors[color] + classNames;

  if (to)
    return (
      <Link to={to} className={allClass}>
        {children}
      </Link>
    );

  if (onClick)
    return (
      <button onClick={onClick} disabled={disabled} className={allClass}>
        {children}
      </button>
    );

  return (
    <button disabled={disabled} className={allClass}>
      {children}
    </button>
  );
}

export default Button;
