import React, { useState } from 'react';
import TextField from '~/core/ui/TextField';
import { PlusCircleIcon, MinusCircleIcon } from '@heroicons/react/24/outline';
import { Trans } from 'react-i18next';
import Button from '~/core/ui/Button';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectItem,
} from '~/core/ui/Select';

const StepThree = ({ formData, updateFormData }) => {
  const [listOfUrlAndEnv, setlistOfUrlAndEnv] = useState(formData?.listOfUrlAndEnv || [{ baseURL: '', environment: '' }]);

  // Function to append a new member input
  const appendMember = () => {
    const newlistOfUrlAndEnv = [...listOfUrlAndEnv, { baseURL: '', environment: '' }];
    setlistOfUrlAndEnv(newlistOfUrlAndEnv);
    updateFormData({ listOfUrlAndEnv: newlistOfUrlAndEnv });
  };

  // Function to remove a member input
  const removeMember = (index) => {
    const newlistOfUrlAndEnv = listOfUrlAndEnv.filter((_, idx) => idx !== index);
    setlistOfUrlAndEnv(newlistOfUrlAndEnv);
    updateFormData({ listOfUrlAndEnv: newlistOfUrlAndEnv });
  };

  // Function to handle input changes
  const handleInputChange = (index, field, value) => {
    const newlistOfUrlAndEnv = [...listOfUrlAndEnv];
    newlistOfUrlAndEnv[index][field] = value;
    setlistOfUrlAndEnv(newlistOfUrlAndEnv);
    updateFormData({ listOfUrlAndEnv: newlistOfUrlAndEnv });
  };

  return (
    <div className={'flex flex-1 flex-col space-y-4'}>
      {listOfUrlAndEnv.map((member, index) => (
        <div key={member.id} className="flex flex-col space-y-2">
          {/* Domain Input */}
          <TextField className="flex-1">
            <TextField.Label>
              Set your App URL
              <TextField.Input
                data-cy={`organization-domain-input-${index}`}
                required
                placeholder="app.milir.com"
                name={`baseURL-${index}`}
                value={member.baseURL}
                onChange={(e) => handleInputChange(index, 'baseURL', e.target.value)}
              />
            </TextField.Label>
          </TextField>

          {/* Environment Select Input */}
          <Select
            onValueChange={(value) => handleInputChange(index, 'environment', value)}
            value={member.environment}
          >
            <SelectTrigger>
              <SelectValue placeholder="Choose Your Environment" className="flex-1" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="Development">Development</SelectItem>
                <SelectItem value="Staging">Staging</SelectItem>
                <SelectItem value="Production">Production</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>

          {/* Add/Remove Member Buttons */}
          <div className="flex items-center justify-between">
            {index !== 0 && (
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={() => removeMember(index)}
              >
                <MinusCircleIcon className="h-5" />
              </Button>
            )}
            {index === listOfUrlAndEnv.length - 1 && (
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={appendMember}
              >
                <PlusCircleIcon className="h-5" />
              </Button>
            )}
          </div>
        </div>
      ))}

      {/* Add new member button if no listOfUrlAndEnv */}
      {listOfUrlAndEnv.length === 0 && (
        <div>
          <Button
            data-cy={'append-new-invite-button'}
            type={'button'}
            variant={'ghost'}
            size={'sm'}
            onClick={appendMember}
          >
            <span className={'flex items-center space-x-2'}>
              <PlusCircleIcon className={'h-5'} />
              <span>
                <Trans i18nKey={'organization:addAnotherMemberButtonLabel'} />
              </span>
            </span>
          </Button>
        </div>
      )}
    </div>
  );
};

export default StepThree;
