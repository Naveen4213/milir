import React from 'react'
import TextField from '~/core/ui/TextField'

const StepOne = ({ formData, updateFormData }) => {
 const updateFormDatas = (e)=>{
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value, 
    });
 }
  return (
    <div>     
        <div className={'flex flex-1 flex-col space-y-2 min-h-96'}>
            <h2>What's your roll in your company?</h2>
            <TextField>
                <TextField.Label>
                Organization Roll

                <TextField.Input
                value={formData.organizationDesignation}
                onChange={(e) => updateFormDatas(e)}
                required
                name="organizationDesignation"
                />
                </TextField.Label>
            </TextField>
            <TextField>
                <TextField.Label>
                Organization Name

                <TextField.Input
                value={formData.organizationName}
                onChange={(e) => updateFormDatas(e)}
                required
                name='organizationName'
                />
                </TextField.Label>
            </TextField>
            <TextField>
                <TextField.Label>
                Team Size

                <TextField.Input
                value={formData.organizationSize}
                onChange={(e) => updateFormDatas(e)}
                required
                name="organizationSize"
                />
                </TextField.Label>
            </TextField>
            <TextField>
                <TextField.Label>
                Organization Landing Page Link

                <TextField.Input
                value={formData.organizationLandingPageLink}
                onChange={(e) => updateFormDatas(e)}
                required
                name="organizationLandingPageLink"
                />
                </TextField.Label>
            </TextField>
            <TextField>
                <TextField.Label>
                Mobile Number

                <TextField.Input
                value={formData.mobileNumber}
                onChange={(e) => updateFormDatas(e)}
                required
                name="mobileNumber"
                />
                </TextField.Label>
            </TextField>
        </div> 
    </div>
  )
}

export default StepOne