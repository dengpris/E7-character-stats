// Should probably eventually use a database

function Description({character}) {
    const renderCharDescription = () => {
        switch(character) {
            case 'Rose':
                return (
                    <>
                    <p className='mt-4'>Rose is mainly used as a water tank for <a href='#'>Fire Expo</a>. {/* TODO: add link */}
                    She is able to help the team cycle with her S3 and give her teammates attack buff. </p>
                    
                    <p>We use Prophetic Candlestick and her S3 EE on her to lower her cooldowns and help the team cycle further.</p>
                    </>
                )
            case 'Roy Mustang':
                return (
                    <>
                    <p className='mt-4'>One of my favourite characters, but the ice weakness holds him back.</p>

                    <p>I mainly use him in Arena or GW when there's no ice defense. 
                    Sometimes he's a last pick in RTA if the opponent doesn't pick too many ice units.</p>
                    </>
                )
            case 'Politis':
                return(
                    <>
                    <p className='mt-4'>Someone I never use. But she's so strong! I have no idea why I don't use her more often, maybe I just forget.
                    I hate fighting against her though (I do somewhat enjoy cleaving).</p>
                    </>
                )
        }
    };
    
    return (
        <div className='description'>
            {renderCharDescription()}
        </div>
    );
}

export default Description;