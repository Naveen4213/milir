import React,{ useState } from 'react'
import Button from '~/core/ui/Button'
import Modal from "~/core/ui/Modal";
import Container from "~/core/ui/Container";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "~/core/ui/Select";
import TextField from "~/core/ui/TextField";
import { RadioGroup, RadioGroupItem } from '~/core/ui/RadioGroup';
import Label  from '~/core/ui/Label';

const CreateFeature = () => {
    const handleFeatureClick = () =>{
        alert("PPPPPPPPP")
    }
    const [isOpen, setIsOpen] = useState(false);
    return (
    <div className='flex justify-end'>
        <div className='flex-initial w-64'>
            <Button onClick={() => setIsOpen(true)}>Create</Button>
            <Modal heading={<>Create Feature</>} isOpen={isOpen} setIsOpen={setIsOpen}>
                <div className={'flex flex-col space-y-4'}>
                    <div className={'flex justify-end space-x-2'}>
                        <TextField.Label>
                        Feature Name
                            <TextField.Input placeholder={'Enter feature title'} />
                        </TextField.Label>

                        <TextField.Label>
                        Feature Label
                            <RadioGroup className='flex space-x-4'>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem id="r1" value={'Free'} />
                                    <Label htmlFor="r1">Free</Label>
                                </div>

                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem id="r2" value={'Paid'} />
                                    <Label htmlFor="r2">Paid</Label>
                                </div>
                            </RadioGroup>
                        </TextField.Label>
                    </div>
                <div className={'flex justify-end space-x-2'}>
                    <Select>
                        <SelectTrigger>
                            <SelectValue placeholder={'Choose Page'} />
                        </SelectTrigger>

                        <SelectContent>
                            <SelectItem value={'Apple'}>Apple</SelectItem>
                            <SelectItem value={'Banana'}>Banana</SelectItem>
                            <SelectItem value={'Peach'}>Peach</SelectItem>
                        </SelectContent>
                    </Select>

                    <Select>
                        <SelectTrigger>
                            <SelectValue placeholder={'Choose Events'} />
                        </SelectTrigger>

                        <SelectContent>
                            <SelectItem value={'Apple'}>Apple</SelectItem>
                            <SelectItem value={'Banana'}>Banana</SelectItem>
                            <SelectItem value={'Peach'}>Peach</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className={'flex justify-end space-x-2'}>
                    <Modal.CancelButton onClick={() => setIsOpen(false)}>
                        Cancel
                    </Modal.CancelButton>

                    <Button variant={'destructive'}>Save</Button>
                    <Button variant={'secondary'}>Close</Button>
                </div>
                </div>
            </Modal>
        </div>
        <div flex-initial w-64>
            <Button onClick={handleFeatureClick}>Feature Flow</Button>
        </div>
    </div>
  )
}

export default CreateFeature