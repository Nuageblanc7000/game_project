export default function TypeChoice({
                                       typeChoice,
                                       team,
                                       activeQuestion,
                                       handleClick,
                                       handleChange,
                                       active,
                                       empty,
                                       rightAnswer
                                   }) {


    // If type of choice is Duo
    if (typeChoice === 1) {
        return (
            <div className="flex flex-wrap justify-center items-center p-4 gap-4">
                {team[activeQuestion].indicesParDeux.map((item, index) => {
                    return (
                        <button onClick={(e) => handleClick(e, item)} key={index}
                                className={`${active == item ? 'bg-primary' : 'bg-primary/75'} hover:bg-primary rounded-lg flex-initial w-80 p-4 text-white font-semibold`}>{item}</button>
                    )
                })}
            </div>
        )
    }

    // If type of choice is Carre
    if (typeChoice === 2) {
        return (
            <div className="flex flex-wrap justify-center items-center p-4 min-h-[200px] gap-4">
                {team[activeQuestion].indicesParQuatre.map((item, index) => {
                    return (
                        <button onClick={(e) => handleClick(e, item)} key={index}
                                className={`${active === item ? 'bg-primary' : 'bg-primary/75'} hover:bg-primary rounded-lg flex-initial w-80 p-4 text-white font-semibold`}>{item}</button>
                    )
                })}

            </div>
        )
    }

    // If type of choice is Cash
    if (typeChoice === 3) {
        return (
            <div className="flex flex-col items-center">
                <h2 className="text-xl">Réponse Cash</h2>
                <div className="form-control">
                    <div className="input-group">
                        <input
                            type="text"
                            placeholder="Votre réponse cash ici..."
                            className="input input-bordered"
                            onChange={handleChange}
                        />
                        <button
                            type="button"
                            className={`btn ${empty ? 'btn-disabled' : 'btn-success'}`}
                            onClick={(e) => handleClick(e, null)}
                        >
                            Confirmer
                        </button>
                    </div>

                </div>

            </div>
        )
    }


}
