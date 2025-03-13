
import { calculateInvestmentResults, formatter } from "../util/investment.js";


export default function Results({userInputs}){
    const resultData = calculateInvestmentResults(userInputs);
    const initailInvestment = resultData[0].valueEndOfYear - resultData[0].interest - 
    resultData[0].annualInvestment
    
    return(
        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {resultData.map(result=>{
                    const totalInterest = result.valueEndOfYear - (result.annualInvestment * result.year ) - initailInvestment;
                    const totalInvested = result.valueEndOfYear - totalInterest;
                    return (
                        <tr key={result.year}>
                            <td>{result.year}</td>
                            <td>{formatter.format(result.valueEndOfYear)}</td>
                            <td>{formatter.format(result.interest)}</td>
                            <td>{formatter.format(totalInterest)}</td>
                            <td>{formatter.format(totalInvested)}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    );
}