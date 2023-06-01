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
        }
    };
    
    return (
        <div className='description'>
            {renderCharDescription()}
        </div>
    );
}

export default Description;