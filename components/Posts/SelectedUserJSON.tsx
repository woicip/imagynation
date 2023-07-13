import CurlyBraces from "../API/CurlyBraces"

export default function SelectedUserJSON(props: any){
    return (
        <div className="overflow-x-auto">
            <CurlyBraces>&#123;</CurlyBraces>
                <br/>
                    <span className='ml-[40px] text-green-500'>&quot;date&quot;</span>: &quot;2022-11-13T04:57:29.333Z&quot;,<br/>
                    <span className='ml-[40px] text-green-500'>&quot;user&quot;</span>: <CurlyBraces>&#123;</CurlyBraces><br/>
                    <span className='ml-[80px]'><span className='text-green-500'>&quot;id&quot;</span>: <span className="text-yellow-500">5</span>,</span>  <br/>
                    <span className='ml-[80px]'><span className='text-green-500'>&quot;fullname&quot;</span>: &quot;Ethan Jhonson&quot;,</span> <br/>
                    <span className='ml-[80px]'><span className='text-green-500'>&quot;username&quot;</span>: &quot;ethjohn45&quot;,</span> <br/>
                    <span className='ml-[80px]'><span className='text-green-500'>&quot;text&quot;</span>: &quot;Feeling inspired after attending an incredible art exhibition.&quot;,</span> <br/>
                    <span className='ml-[80px]'><span className='text-green-500'>&quot;likes&quot;</span>: <span className="text-yellow-500">64301</span>,</span> <br/>
                    <span className='ml-[80px]'><span className='text-green-500'>&quot;comments&quot;</span>: <span className="text-yellow-500">168</span>,</span> <br/>
                    <span className='ml-[80px]'><span className='text-green-500'>&quot;avatar&quot;</span>: &quot;https://a.pomf.cat/vsglja.jpg&quot;</span> <br/>
                    <span className='ml-[80px]'><span className='text-green-500'>&quot;image_post&quot;</span>: &quot;https://pomf2.lain.la/f/t4ropc0e.png&quot;,</span> <br/>
                    <span className='ml-[80px]'><span className='text-green-500'>&quot;posted_at&quot;</span>: &quot;10 hours ago&quot;,</span>
                    <br/>
                    <CurlyBraces><span className="ml-[40px]">&#125;</span></CurlyBraces>
                <br/>

            <CurlyBraces>&#125;</CurlyBraces> 
        </div>
    )
}