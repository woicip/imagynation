export default function Header(props: any){

    const { number, title, desc } = props;

    return (
        <div className='mb-[30px] flex items-start'>
            <p className='font-thin text-5xl text-white/30 mr-[20px]'>{number}</p>
            <div>
                <h3 className='text-lg font-bold flex items-center'>{title}</h3>
                <p className='mt-[3px] text-sm text-white/70'>{desc}</p>
            </div>
        </div>
    )
}