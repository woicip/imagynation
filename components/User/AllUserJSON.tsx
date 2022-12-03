import CurlyBraces from "../API/CurlyBraces"

export default function AllUsersJSON(props: any){
    return ( 
    <span>
        <CurlyBraces>&#123;</CurlyBraces>
            <br/>
                <span className='ml-[40px] text-green-500'>&quot;date&quot;</span>: &quot;2022-11-13T04:57:29.333Z&quot;,<br/>
                <span className='ml-[40px] text-green-500'>&quot;users&quot;</span>: <CurlyBraces>&#91;</CurlyBraces><br/>
                <span className='ml-[80px]'>
                    <CurlyBraces>&#123;</CurlyBraces> 
                        <br/>
                            <span className='ml-[120px]'><span className='text-green-500'>&quot;id&quot;</span>: <span className="text-yellow-500">1</span>,</span> <br/>
                            <span className='ml-[120px]'><span className='text-green-500'>&quot;name&quot;</span>: &quot;Alex Basherman&quot;</span> <br/>
                            <span className='ml-[120px]'><span className='text-green-500'>&quot;email&quot;</span>: &quot;alex.basherman@email.com&quot;</span> <br/>
                            <span className='ml-[120px]'><span className='text-green-500'>&quot;phone&quot;</span>: &quot;+1 (733) 991-3371&quot;</span> <br/>
                            <span className='ml-[120px]'><span className='text-green-500'>&quot;avatar&quot;</span>: &quot;https://a.pomf.cat/ykbrtu.jpg&quot;</span>
                        <br/>
                    <CurlyBraces><span className='ml-[80px]'>&#125;,</span></CurlyBraces>
                </span>
        
                <br/>
        
                <span className='ml-[80px]'>
                    <CurlyBraces>&#123;</CurlyBraces> 
                        <br/>
                            <span className='ml-[120px]'><span className='text-green-500'>&quot;id&quot;</span>: <span className="text-yellow-500">2</span>,</span> <br/>
                            <span className='ml-[120px]'><span className='text-green-500'>&quot;name&quot;</span>: &quot;Founche Daman&quot;</span> <br/>
                            <span className='ml-[120px]'><span className='text-green-500'>&quot;email&quot;</span>: &quot;founcheDaman12@mail.com&quot;</span> <br/>
                            <span className='ml-[120px]'><span className='text-green-500'>&quot;phone&quot;</span>: &quot;+1 (968) 558-4041&quot;</span> <br/>
                            <span className='ml-[120px]'><span className='text-green-500'>&quot;avatar&quot;</span>: &quot;https://a.pomf.cat/uskdjm.jpg&quot;</span>
                        <br/>
                    <CurlyBraces><span className='ml-[80px]'>&#125;,</span></CurlyBraces>
                </span>
        
                <br/>
        
                <span className='ml-[80px]'>
                    <CurlyBraces>&#123;</CurlyBraces>
                        <br/>
                            <span className='ml-[120px]'><span className='text-green-500'>&quot;id&quot;</span>: <span className="text-yellow-500">3</span>,</span> <br/>
                            <span className='ml-[120px]'><span className='text-green-500'>&quot;name&quot;</span>: &quot;George A. William&quot;</span> <br/>
                            <span className='ml-[120px]'><span className='text-green-500'>&quot;email&quot;</span>: &quot;georgeawilliam@mail.com&quot;</span> <br/>
                            <span className='ml-[120px]'><span className='text-green-500'>&quot;phone&quot;</span>: &quot;+1 (626) 830-3705&quot;</span> <br/>
                            <span className='ml-[120px]'><span className='text-green-500'>&quot;avatar&quot;</span>: &quot;https://a.pomf.cat/dfyjjj.jpg&quot;</span>
                        <br/>
                    <CurlyBraces><span className='ml-[80px]'>&#125;,</span></CurlyBraces>
                </span>
        
                <br/>
        
                <span className='ml-[80px]'>
                    <CurlyBraces>&#123;</CurlyBraces>
                        <span className="text-white/50">...</span>
                    <CurlyBraces>&#125;,</CurlyBraces>
                </span>

                <span className='ml-[10px]'>
                    <CurlyBraces>&#123;</CurlyBraces>
                        <span className="text-white/50">...</span>
                    <CurlyBraces>&#125;,</CurlyBraces>
                </span>
                
                <span className='ml-[10px]'>
                    <CurlyBraces>&#123;</CurlyBraces>
                        <span className="text-white/50">...</span>
                    <CurlyBraces>&#125;</CurlyBraces>
                </span>
        
                <br/>
                
                <CurlyBraces><span className='ml-[40px]'>&#93;</span></CurlyBraces>
        
                <br/>
                <CurlyBraces>&#125;</CurlyBraces>   
        </span>
    )
}