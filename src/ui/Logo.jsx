import { Avatar } from 'antd';

function Logo({ children, size = 40, shape = 'square', bgSrc, bgColor, bgImage, textColor = 'var(--color-grey-50)' }) {
  return (
    <Avatar
      src={bgSrc}
      size={size}
      shape={shape}
      style={{
        backgroundColor: bgColor || '',
        backgroundImage: bgImage || '',
        color: textColor,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {children}
    </Avatar>
  );
}

export default Logo;
