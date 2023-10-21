function Heading({
    as = 'h1',
    children,
    classNames = ''
}) {
    const styles = {
        h1: 'text-[3rem]',
        h2: 'text-[2.5rem]',
        h3: 'text-[2rem]',
        h4: 'text-[1.75rem]',
        h5: 'text-[1.5rem]'
    }

    return (
        <h1 className={`leading-6 font-[700] ${styles[as]} ${classNames}`}>{children}</h1>
    )
}

export default Heading