import { Select } from "@radix-ui/themes";

interface InputProps {
    value: any;
}

const CustomSelect: React.FC<InputProps> = ({value}) => {

    return (
      <Select.Root defaultValue={value}>
        <Select.Trigger />
        <Select.Content>
          <Select.Group>
            <Select.Label>Sector</Select.Label>
            <Select.Item value="orange">600 VIV. LOMAS DE TAFI</Select.Item>
            <Select.Item value="apple">LOMAS SECTOR VI 287 VIV.</Select.Item>
            <Select.Item value="opcion3">LOMAS SECTOR VII 294 VIV.</Select.Item>
            <Select.Item value="opcion4">LOMAS SECTOR VIII 346 VIV.</Select.Item>
            <Select.Item value="opcion5">LOMAS SECTOR IX 282 VIV.</Select.Item>
            <Select.Item value="opcion6">LOMAS SECTOR X 284 VIV.</Select.Item>
            <Select.Item value="opcion7">LOMAS SECTOR XI 290 VIV.</Select.Item>
            <Select.Item value="opcion8">LOMAS SECTOR XII 289 VIV.</Select.Item>
            <Select.Item value="opcion9">LOMAS SECTOR XIII 287 VIV.</Select.Item>
            <Select.Item value="opcion10">LOMAS SECTOR XIV 312 VIV.</Select.Item>
            <Select.Item value="opcion11">LOMAS SECTOR XV 329 VIV.</Select.Item>
            <Select.Item value="opcion12">LOMAS SECTOR XVI 178 VIV.</Select.Item>
            <Select.Item value="opcion13">LOMAS SECTOR XV 329 VIV.</Select.Item>
            <Select.Item value="opcion14">LOMAS SECTOR XVI 178 VIV.</Select.Item>
            <Select.Item value="opcion15">LOMAS SECTOR XVII 261 VIV.</Select.Item>
            <Select.Item value="opcion16">LOMAS SECTOR XVIII 226 VIV.</Select.Item>
            <Select.Item value="opcion17">LOMAS SECTOR XIX 273 VIV.</Select.Item>
            <Select.Item value="opcion18">LOMAS SECTOR XX 266 VIV.</Select.Item>
            <Select.Item value="opcion19">166 VIV. LOMAS DE TAFI</Select.Item>
            <Select.Item value="opcion20">LOS POCITOS 448 VIV-SEC.A/342V</Select.Item>
          </Select.Group>
        </Select.Content>
      </Select.Root>
    );
  };

  export default CustomSelect;