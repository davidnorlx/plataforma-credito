export default function ApplicationTable({ applications }) {

    function badge(status){

        switch(status){

            case "APPROVED":
                return "approved"

            case "REJECTED":
                return "rejected"

            default:
                return "manual"

        }

    }

    return(

        <table className="table-modern">

            <thead>

                <tr>

                    <th>Cliente</th>

                    <th>Score</th>

                    <th>Salario</th>

                    <th>Monto</th>

                    <th>Estado</th>

                </tr>

            </thead>

            <tbody>

                {applications.map(app=>(

                    <tr key={app.ApplicationId}>

                        <td>{app.CustomerId}</td>

                        <td>{app.Score}</td>

                        <td>

                            {new Intl.NumberFormat('es-CO',{
                                style:'currency',
                                currency:'COP',
                                maximumFractionDigits:0
                            }).format(app.Salary)}

                        </td>

                        <td>

                            {new Intl.NumberFormat('es-CO',{
                                style:'currency',
                                currency:'COP',
                                maximumFractionDigits:0
                            }).format(app.RequestedAmount)}

                        </td>

                        <td>

                            <span className={`badge ${badge(app.Status)}`}>

                                {app.Status}

                            </span>

                        </td>

                    </tr>

                ))}

            </tbody>

        </table>

    )

}