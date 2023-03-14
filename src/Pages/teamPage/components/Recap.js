import {Fragment} from "react";

export default function Recap({userResponses, questions, points}) {
    return (
        <>
            <h1 className="font-bold text-4xl text-center">Récapitulatif de vos réponses</h1>
            <div className="overflow-x-auto">
                <table className="table w-full mt-20">
                    <thead>
                    <tr>
                        <th>N°</th>
                        <th>Vos réponses</th>
                        <th>Réponses</th>
                    </tr>
                    </thead>
                    <tbody>
                    {userResponses.map((r, index) => r.toString().toLowerCase() === questions[index].reponse.toString().toLowerCase()
                        ? (
                            <Fragment key={index}>
                                <tr>
                                    <td>{index + 1}</td>
                                    <td className="text-success font-medium">{r}</td>
                                    <td>{questions[index].reponse}</td>
                                </tr>
                            </Fragment>
                        )
                        : (
                           <Fragment key={index}>
                               <tr>
                                   <td>{index + 1}</td>
                                   <td className="text-error font-medium">{r}</td>
                                   <td>{questions[index].reponse}</td>
                               </tr>
                           </Fragment>
                        )
                    )}
                    </tbody>
                    <tfoot>
                    <tr>
                        <th>Points</th>
                        <td colSpan="2"><span className="flex justify-center items-center text-3xl bg-secondary text-white w-10 h-10 rounded-full">{points}</span></td>
                    </tr>
                    </tfoot>
                </table>
            </div>
        </>
    )
}