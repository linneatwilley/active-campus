import { useNavigate } from "react-router-dom";

import Input from "../../../components/Actions/Input";
import Dropdown from "../../../components/Actions/Dropdown";
import Button from "../../../components/Actions/Button";


const Info = ({ nextStep, updateData, data }) => {
  const navigate = useNavigate();

  return (
    <div>
      <h1 className="mb-5 text-2xl font-bold">Nytt arrangement</h1>

      <div className="flex flex-col">
        <div className="flex flex-wrap gap-5">
          <div className="flex flex-col gap-5 w-80 sm:mr-10">

            {/* create label wrapper and remove label from all input components */}

            <Input name='name' placeholder='Navn på arrangement' label='Arrangement navn*' />
            <Input name='organizor' placeholder='Navn på arrangør' label='Navn på arrangør*' />
            <Input name='address' placeholder='Adresse for arrangement' label='Adresse for arrangement*' />

            {/* make custom multiselect dropdown menu */}
            <Dropdown options={data.tags} label='Tags' />

            <div className="flex gap-5">
              <Input name='start' placeholder='time' type='time' label='Start tid*' />
              <Input name='end' placeholder='time' type='time' label='Slutt tid*' />
            </div>

            <Input name='date' placeholder='Dato' type='date' label='Dato*' />
          </div>

          <div className="flex flex-col gap-2 w-80">
            {/* replace with textarea component */}
            <label htmlFor="description">Beskrivelse</label>
            <textarea className="border border-border outline-none rounded-md p-2 resize-none focus:border-dark" id="description" rows="10" defaultValue={data.description} />

            {/* replace with file component */}
            <label>Last opp bilde <small>(JPG, PNG)</small></label>
            <input type="file" />
          </div>
        </div>

        <div className="flex mt-10 gap-5 flex-wrap sm:flex-nowrap sm:w-80">
          <Button onClick={nextStep}>Neste</Button>
          <Button style='danger' onClick={() => navigate('/events')}>Avbryt</Button>
        </div>
      </div>
    </div>
  );
};


export default Info;
