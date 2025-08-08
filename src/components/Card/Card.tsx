interface CardProps {
    title: string;
    children: React.ReactNode;
    className?: string;
}

const Card = ({ title, children, className = '' }: CardProps) => (
    <section className={`w-full rounded-lg border border-[var(--bg-card)] shadow-sm ${className}`}>
        <div className='flex flex-col space-y-1.5 p-6'>
            <h3 className='text-2xl font-semibold leading-none tracking-tight'>{title}</h3>
        </div>
        <div className='p-6 pt-0'>
            {children}
        </div>
    </section>
);

export default Card;