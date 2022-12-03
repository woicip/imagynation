function GET(props: any){
    return <code className='font-bold text-[#fd5ee8] mr-[30px] tabletL:mr-[20px] text-sm'>GET</code>
}

function POST(props: any){
    return <code className='font-bold text-[#27fc32] mr-[30px] tabletL:mr-[20px] text-sm'>POST</code>
}

export default function Address(props: any){

    const { method, address } = props;

    return (
        <div className='px-[30px] tabletL:px-[20px] rounded-lg bg-[#202020] border border-[#373737] flex items-center'>
            <div className='py-[10px] border-r border-[#393838]'>
                { method === "GET" && <GET/>}
                { method === "POST" && <POST/> }
            </div>

            <div className='h-full py-[10px] px-[30px] tabletL:px-[20px] text-sm mobileL:overflow-x-scroll'>
                <pre>
                    <code className="py-[10px]">{address}</code>
                </pre>
            </div>
        </div>
    )
}