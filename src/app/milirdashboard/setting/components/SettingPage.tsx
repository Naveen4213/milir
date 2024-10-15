'use client';
import React from 'react'
import Sidebar from '../../components/Sidebar'
import Divider from '~/core/ui/Divider';
import TextField from "~/core/ui/TextField";
import Button from '~/core/ui/Button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, } from "~/core/ui/Select";
import Alert from "~/core/ui/Alert";

const SettingPage = () => {
  return (
    <div className="flex">
      <div className='w-1/5'>< Sidebar/></div>
      <div className='w-4/5 mt-24'>
        <h1 className='font-bold'>Profile</h1>
        <p className='mt-1.5 text-sm text-slate-400'>This information will be displayed publicly, so be careful what you share.</p>
        <div className='mt-4 mr-8'>
          < Divider />
        </div>
        <div className='flex justify-between items-center space-x-4 mt-4 mr-8'>
          <div>
            <TextField.Label className='flex items-center space-x-2'>
              First Name
            </TextField.Label>
          </div>
          <div>Sangeetha</div>
          <div><Button size="small">Update</Button></div>
        </div>
        <div className='mt-4 mr-8'>
          < Divider />
        </div>
        <div className='flex justify-between items-center space-x-4 mt-4 mr-8'>
          <div>
            <TextField.Label className='flex items-center space-x-2'>
              Last Name
            </TextField.Label>
          </div>
          <div>Raj</div>
          <div><Button size="small">Update</Button></div>
        </div>
        <div className='mt-4 mr-8'>
          < Divider />
        </div>
        <div className='flex justify-between items-center space-x-4 mt-4 mr-8'>
          <div>
            <TextField.Label className='flex items-center space-x-2'>
              Email Address
            </TextField.Label>
          </div>
          <div>sangeetha@mavencart.com</div>
          <div></div>
        </div>
        <div className='mt-4 mr-8'>
          < Divider />
        </div>
        <div className='flex justify-between items-center space-x-4 mt-4 mr-8'>
          <div>
            <TextField.Label className='flex items-center space-x-2'>
              Phone Number
            </TextField.Label>
          </div>
          <div>8787878787</div>
          <div><Button size="small">Update</Button></div>
        </div>
        <div className='mt-4 mr-8'>
          < Divider />
        </div>
        <div className='flex justify-between items-center space-x-4 mt-4 mr-8'>
          <div>
            <TextField.Label className='flex items-center space-x-2'>
              Organization
            </TextField.Label>
          </div>
          <div>Mavencart</div>
          <div><Button size="small">Update</Button></div>
        </div>
        <div className='mt-4 mr-8'>
          < Divider />
        </div>
        <div className='flex justify-between items-center space-x-4 mt-4 mr-8'>
          <div>
            <TextField.Label className='flex items-center space-x-2'>
              Role at Mavencart
            </TextField.Label>
          </div>
          <div></div>
          <div><Button size="small">Update</Button></div>
        </div>
        <div className='mt-4 mr-8'>
          < Divider />
        </div>
        <div className='flex justify-between items-center space-x-4 mt-4 mr-8'>
          <div>
            <TextField.Label className='flex items-center space-x-2'>
              Email Verified
            </TextField.Label>
          </div>
          <div>Not verified</div>
          <div><Button size="small">Update</Button></div>
        </div>
        <div className='mt-4 mr-8'>
          < Divider />
        </div>
        <div className='flex justify-between items-center space-x-4 mt-4 mr-8'>
          <div>
            <TextField.Label className='flex items-center space-x-2'>
              List of URL & Environment
            </TextField.Label>
          </div>
          <div><Select>
              <SelectTrigger>
                <SelectValue placeholder={'Choose default url'} />
              </SelectTrigger>
              
              <SelectContent>
                  <SelectItem value={'Apple'}>Apple</SelectItem>
                  <SelectItem value={'Banana'}>Banana</SelectItem>
                  <SelectItem value={'Peach'}>Peach</SelectItem>
              </SelectContent>
            </Select> 
            </div>
            <div>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder={'Choose default env'} />
              </SelectTrigger>
              
              <SelectContent>
                  <SelectItem value={'Apple'}>Apple</SelectItem>
                  <SelectItem value={'Banana'}>Banana</SelectItem>
                  <SelectItem value={'Peach'}>Peach</SelectItem>
              </SelectContent>
            </Select>
            </div>
          <div><Button size="small">Add</Button></div>
        </div>
        <div className='mt-4 mr-8'>
          < Divider />
        </div>
        <div className='mr-8'>
          <Alert type={'error'}>
          Please choose your default URL and ENV.
          </Alert>
        </div>
      </div>
    </div>
  )
}

export default SettingPage