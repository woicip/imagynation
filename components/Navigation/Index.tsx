import Soon from '../Label/Soon';

function Active(props: any){
    return <button className='py-[10px] px-[20px] text-sm border-b-2 border-docs-cyan font-semibold bg-docs-cyan/40 rounded-t-lg'>{props.children}</button>
}

function NonActive(props: any){

    const { handler } = props;

    return (
        <button className='ml-[5px] mr-[5px] py-[10px] px-[20px] text-sm border-b-2 border-b-transparent text-white/70 hover:text-white hover:bg-white/10 rounded-t-lg' onClick={handler}>
            {props.children}
        </button>
    )
}

export default function Navigation(props: any){

    const { state, dispatch } = props;

    function AnimeHandler(){
        dispatch({ type: 'anime' });
    }

    function UserHandler(){
        dispatch({ type: 'user' });
    }

    function PostHandler(){
        dispatch({ type: 'posts' })
    }

    return (
        <div className='mt-[100px] flex items-center border-b border-white/20 mobileL:overflow-x-scroll'>
            { state.user && <Active> 😀 User </Active> }
            { !state.user && <NonActive handler={UserHandler}> 😀 User </NonActive> }

            { state.posts && <Active> 🎍 Post </Active> }
            { !state.posts && <NonActive handler={PostHandler}> 🎍 Post </NonActive> }

            {/* { state.blog && <Active> 🎃 Blog </Active> }
            { !state.blog && <NonActive handler={() => dispatch({ type: "blog" })}> 🎃 Blog </NonActive> }

            { state.anime && <Active> 🎐 Anime <Soon/> </Active> }
            { !state.anime && <NonActive handler={AnimeHandler}> 🎐 Anime <Soon/> </NonActive> } */}

        </div>
    )
}