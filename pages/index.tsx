import Head from 'next/head';
import Navigation from '../components/Navigation/Index';
import Footer from '../components/Footer/Index';
import Anime from '../components/Anime/Index';
import User from '../components/User/Index';
import { useReducer } from 'react';

interface NavState {
    user: boolean,
    anime: boolean
}

const navState: NavState = {
    user: true,
    anime: false
}

type Actions = 'anime' | 'user';

function NavReducer(state: NavState, action: { type: Actions }): any {
    switch(action.type){
        case 'anime':
            return { beach: false, anime: true, user: false };

        case 'user': 
            return { beach: false, anime: false, user: true };

        default:
            throw new Error();
    }
}

export default function Home() {

    const [ state, dispatch ] = useReducer(NavReducer, navState);

    return (
        <section className="flex flex-col items-center justify-center animate-fadeIn">
            <Head>
                <title>🧩 Imagy</title>
                <meta name="description" content="Images API Documentation" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="w-[50%] py-[110px] text-white laptopXL:w-[80%] tabletL:w-[90%]">
                <section className='flex flex-col items-center justify-center '>
                    <h1 className='text-6xl tabletM:text-5xl font-bold text-center'>🧩 Imagy</h1>
                    <p className='mt-[30px] text-sm text-center text-white'>
                        A REST API that providing you with several data for your UI Prototyping/UI Design testing.
                    </p>
                    <div className='mt-[20px] text-sm py-[5px] px-[15px] bg-docs-cyan/40 border border-white/20 rounded-full'>
                        <p className='text-white font-semibold'>v0.1.0</p>
                    </div>
                </section>

                <Navigation state={state} dispatch={dispatch} />
                
                { state.anime && <Anime /> }
                { state.user && <User /> }
                
                <div className='mt-[100px] w-full h-[1px] bg-white/10'></div>
                <Footer />
            </main>

        </section>
    )
}
