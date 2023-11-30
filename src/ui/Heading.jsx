function Heading({ as = 'h1', children, classNames = '' }) {
  const styles = {
    h1: 'text-[3rem]',
    h2: 'text-[2.5rem]',
    h3: 'text-[2rem]',
    h4: 'text-[1.6rem]',
    h5: 'text-[1.4rem]',
  };

  return <span className={`flex items-center font-bold leading-[2rem] ${styles[as]} ${classNames}`}>{children}</span>;
}

export default Heading;
