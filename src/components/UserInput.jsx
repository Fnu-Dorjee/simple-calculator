

export default function UserInput({onChangeHandle, userInputs}){

    return(
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label>initial investment</label>
                    <input 
                        type="number" 
                        required  
                        value={userInputs.initialInvestment}
                        onChange={(e)=>onChangeHandle('initialInvestment',e.target.value)}
                    />
                </p>
                <p>
                    <label>anual investment</label>
                    <input 
                        type="number" 
                        required
                        value={userInputs.annualInvestment}
                        onChange={(e)=>onChangeHandle('annualInvestment', e.target.value)}
                    />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label>Expected Return</label>
                    <input 
                        type="number" 
                        required
                        value={userInputs.expectedReturn}
                        onChange={(e)=>onChangeHandle('expectedReturn', e.target.value)}
                    />
                </p>
                <p>
                    <label>Duration</label>
                    <input 
                        type="number" 
                        required
                        value={userInputs.duration}
                        onChange={(e)=>onChangeHandle('duration', e.target.value)}
                    />
                </p>
            </div>
        </section>
    );
}