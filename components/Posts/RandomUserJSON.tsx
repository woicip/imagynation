import CurlyBraces from "../API/CurlyBraces"

export default function RandomUserJSON(props: any){
    return (
        <div className="overflow-x-auto">
            <CurlyBraces>&#123;</CurlyBraces>
                <br/>
                    <span className='ml-[40px] text-green-500'>&quot;date&quot;</span>: &quot;2022-11-13T04:57:29.333Z&quot;,<br/>
                    <span className='ml-[40px] text-green-500'>&quot;user&quot;</span>: <CurlyBraces>&#123;</CurlyBraces><br/>
                    <span className='ml-[80px]'><span className='text-green-500'>&quot;id&quot;</span>: <span className="text-yellow-500">1</span>,</span>  <br/>
                    <span className='ml-[80px]'><span className='text-green-500'>&quot;fullname&quot;</span>: &quot;Benjamin Thompson&quot;,</span> <br/>
                    <span className='ml-[80px]'><span className='text-green-500'>&quot;username&quot;</span>: &quot;benthom22&quot;,</span> <br/>
                    <span className='ml-[80px]'><span className='text-green-500'>&quot;text&quot;</span>: &quot;Enjoying the little things in life: a beautiful sunset and a warm cup of tea.&quot;,</span> <br/>
                    <span className='ml-[80px]'><span className='text-green-500'>&quot;likes&quot;</span>: <span className="text-yellow-500">532467</span>,</span> <br/>
                    <span className='ml-[80px]'><span className='text-green-500'>&quot;comments&quot;</span>: <span className="text-yellow-500">59</span>,</span> <br/>
                    <span className='ml-[80px]'><span className='text-green-500'>&quot;avatar&quot;</span>: &quot;https://a.pomf.cat/ykbrtu.jpg&quot;</span> <br/>
                    <span className='ml-[80px]'><span className='text-green-500'>&quot;image_post&quot;</span>: &quot;https://pomf2.lain.la/f/qc2ykdqa.png&quot;,</span> <br/>
                    <span className='ml-[80px]'><span className='text-green-500'>&quot;posted_at&quot;</span>: &quot;10 hours ago&quot;,</span>
                    <br/>
                    <CurlyBraces><span className="ml-[40px]">&#125;</span></CurlyBraces>
                <br/>

            <CurlyBraces>&#125;</CurlyBraces> 
        </div>
    )
}