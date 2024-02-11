import {
  Datagrid,
  List,
  EditButton,
  Edit,
  SimpleForm,
  Create,
  SelectColumnsButton,
  DatagridConfigurable,
  TopToolbar,
  CreateButton,
  ExportButton,
  FilterButton,
  //Field controls
  BooleanField,
  DateField,
  EmailField,
  ImageField,
  NumberField,
  ReferenceField,
  TextField,
  UrlField,
  //Input controls
  BooleanInput,
  DateInput,
  EmailInput,
  ImageInput,
  NumberInput,
  ReferenceInput,
  TextInput,
  UrlInput,
  PasswordInput
} from "react-admin";
import { useRecordContext } from "react-admin";
const ReadOnlyPasswordField = ({ record, source }) => {

  // You can customize the way you display the password here, e.g., mask it with asterisks
  const maskedPassword =  '********';

  return (
      <span>{maskedPassword}</span>
  );
};
const ListActions = () => (
    <TopToolbar>
        <FilterButton />
        <CreateButton />
        <ExportButton />
        <SelectColumnsButton />
    </TopToolbar>
);
const shoppingCartsTitle = () => {
  const record = useRecordContext();
  return <span>shoppingCarts {record ? `"${ record.customerId }"` : ""}</span>;
};

export const shoppingCartsList = () => (
      <List actions={<ListActions  />} filters={ResourceFilters} >
        <DatagridConfigurable>
          <NumberField source="customerId" />
<NumberField source="productId" />
<NumberField source="price" />
<NumberField source="quantity" /><EditButton />

        </DatagridConfigurable>
      </List>
      );

export const shoppingCartsEdit = () => (
                    <Edit title={<shoppingCartsTitle />}>
                      <SimpleForm>
                          <NumberInput source="customerId"   />
<NumberInput source="productId"   />
<NumberInput source="price"   />
<NumberInput source="quantity"   />
                      </SimpleForm>
                    </Edit>
                  );

export const shoppingCartsCreate = () => (
                                  <Create>
                                    <SimpleForm>
                                        <NumberInput source="customerId"   />
<NumberInput source="productId"   />
<NumberInput source="price"   />
<NumberInput source="quantity"   />
                                    </SimpleForm>
                                  </Create>
                                );

const ResourceFilters = [
      <TextInput source="q" label="Search" alwaysOn />,
,
,
,
,

    ];


