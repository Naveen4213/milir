import React from 'react'
import TextField from '~/core/ui/TextField'

const StepTwo = ({ formData, updateFormData}) => {
  const updateFormDatas = (e)=>{
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value, 
    });
  };
  return (
    <div>     
        <div className={'flex flex-1 flex-col space-y-2'}>
            <TextField>
                <TextField.Label>
                Trail Days?
                <TextField.Input
                value={formData.trail}
          onChange={(e) => updateFormDatas(e)}
                required
                name="trail"
                />
                </TextField.Label>
            </TextField>

            <TextField>
                <TextField.Label>
                Plan Name
                <TextField.Input
                value={formData.plan}
          onChange={(e) => updateFormDatas(e)}
                name="plan"
                placeholder="E.g. Trial"
                />
                </TextField.Label>
            </TextField>
          
        </div> 
    </div>
  )
}

export default StepTwo

