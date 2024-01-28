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
  //EmailInput,
  ImageInput,
  NumberInput,
  ReferenceInput,
  TextInput,
  //UrlInput,
} from "react-admin";
import { useRecordContext } from "react-admin";
const ListActions = () => (
    <TopToolbar>
        <FilterButton />
        <CreateButton />
        <ExportButton />
        <SelectColumnsButton />
    </TopToolbar>
);
const ProductcategoriesTitle = () => {
  const record = useRecordContext();
  return <span>Productcategories {record ? `"${ record.id }"` : ""}</span>;
};

export const ProductcategoriesList = () => (
      <List actions={<ListActions  />} filters={ResourceFilters} >
        <DatagridConfigurable>
          <TextField source="id" />
<TextField source="categoryDescription" /><EditButton />

        </DatagridConfigurable>
      </List>
      );

export const ProductcategoriesEdit = () => (
                    <Edit title={<ProductcategoriesTitle />}>
                      <SimpleForm>
                          <TextInput source="id"   disabled/>
<TextInput source="categoryDescription"   />
                      </SimpleForm>
                    </Edit>
                  );

export const ProductcategoriesCreate = () => (
                                  <Create>
                                    <SimpleForm>
                                        <TextInput source="id"   disabled/>
<TextInput source="categoryDescription"   />
                                    </SimpleForm>
                                  </Create>
                                );

const ResourceFilters = [
      <TextInput source="q" label="Search" alwaysOn />,
,

    ];


