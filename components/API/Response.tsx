export default function Response(props: any){

    const { title, res } = props;

    return (
        <div className='mt-[30px]'>
            <h3 className='font-medium text-sm flex items-center'><pre className='inline mr-[10px]'><code className='text-[#22E6CC]'>&#123;&#125;</code></pre>{title}</h3>
            <div className='mt-[15px] py-[25px] px-[30px] bg-[#202020] border border-[#373737] rounded-lg tabletL:overflow-scroll'>
                <pre>
                    <code className='text-sm'>
                        {res}
                    </code>
                </pre>
            </div>
        </div>
    )
}