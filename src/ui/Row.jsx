function Row({ type = 'hor', children, classNames = '' }) {
  const styles = {
    hor: 'justify-between items-center',
    ver: 'flex-col gap-[1.6rem]',
  };
  return <div className={`flex ${styles[type]} ${classNames}`}>{children}</div>;
}

export default Row;
