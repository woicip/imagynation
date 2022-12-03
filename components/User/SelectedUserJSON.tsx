import CurlyBraces from "../API/CurlyBraces"

export default function SelectedUserJSON(props: any){
    return (
        <div>
            <CurlyBraces>&#123;</CurlyBraces>
                <br/>
                    <span className='ml-[40px] text-green-500'>&quot;date&quot;</span>: &quot;2022-11-13T04:57:29.333Z&quot;,<br/>
                    <span className='ml-[40px] text-green-500'>&quot;user&quot;</span>: <CurlyBraces>&#123;</CurlyBraces><br/>
                    <span className='ml-[80px]'><span className='text-green-500'>&quot;id&quot;</span>: <span className="text-yellow-500">5</span>,</span>  <br/>
                    <span className='ml-[80px]'><span className='text-green-500'>&quot;name&quot;</span>: &quot;Josh Arthur&quot;,</span> <br/>
                    <span className='ml-[80px]'><span className='text-green-500'>&quot;email&quot;</span>: &quot;arthur.josh@mail.com&quot;,</span> <br/>
                    <span className='ml-[80px]'><span className='text-green-500'>&quot;phone&quot;</span>: &quot;+1 (934) 759-2524&quot;,</span> <br/>
                    <span className='ml-[80px]'><span className='text-green-500'>&quot;avatar&quot;</span>: &quot;https://a.pomf.cat/vsglja.jpg&quot;</span>
                    <br/>
                    <CurlyBraces><span className="ml-[40px]">&#125;</span></CurlyBraces>
                <br/>

            <CurlyBraces>&#125;</CurlyBraces> 
        </div>
    )
}