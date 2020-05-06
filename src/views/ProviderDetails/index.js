import React from 'react';
import View from 'components/View';
import Tabs from 'components/Tabs';
import { useTabs } from 'hooks/useTabs';
import { useGetProviderDetails } from 'graphql/queries/entities/getProviderDetails';
import Spinner from 'components/Spinner';
import Actions from './Actions';

const tabs = [
  {
    id: 'summary',
    name: 'Detalles'
  },
  {
    id: 'materials',
    name: 'Materiales'
  },
  {
    id: 'services',
    name: 'Servicios'
  },
  {
    id: 'workers',
    name: 'Trabajadores'
  }
];

const ProviderDetails = () => {
  const { currentTab, toggleTab } = useTabs('summary');
  const { data, loading } = useGetProviderDetails();
  if (loading)
    return (
      <div className="flex flex-1 justify-center text-5xl overflow-hidden">
        <Spinner className="text-blue-600 mt-16" />
      </div>
    );
  const {
    name,
    email,
    phone,
    address,
    postal_code,
    city,
    province,
    country,
    observations
  } = data;
  return (
    <View title="Proveedor" actions={<Actions data={data} />}>
      <Tabs value={currentTab} tabs={tabs} onChange={toggleTab} />
      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:p-0">
          <dl>
            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-5">
              <dt className="text-sm leading-5 font-medium text-gray-500">
                Nombre
              </dt>
              <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                {name}
              </dd>
            </div>
            <div className="mt-8 sm:mt-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:border-t sm:border-gray-200 sm:px-6 sm:py-5">
              <dt className="text-sm leading-5 font-medium text-gray-500">
                Email
              </dt>
              <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                {email}
              </dd>
            </div>
            <div className="mt-8 sm:mt-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:border-t sm:border-gray-200 sm:px-6 sm:py-5">
              <dt className="text-sm leading-5 font-medium text-gray-500">
                Teléfono
              </dt>
              <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                {phone}
              </dd>
            </div>
            <div className="mt-8 sm:mt-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:border-t sm:border-gray-200 sm:px-6 sm:py-5">
              <dt className="text-sm leading-5 font-medium text-gray-500">
                Dirección
              </dt>
              <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                {`${address || ''}, ${postal_code || ''}, ${city || ''} (${
                  province || ''
                }), ${country || ''}`}
              </dd>
            </div>
            <div className="mt-8 sm:mt-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:border-t sm:border-gray-200 sm:px-6 sm:py-5">
              <dt className="text-sm leading-5 font-medium text-gray-500">
                Observaciones
              </dt>
              <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                {observations}
              </dd>
            </div>
            <div className="mt-8 sm:mt-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:border-t sm:border-gray-200 sm:px-6 sm:py-5">
              <dt className="text-sm leading-5 font-medium text-gray-500">
                Contactos
              </dt>
              <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                <ul className="border border-gray-200 rounded-md">
                  <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm leading-5">
                    <div className="w-0 flex-1 flex items-center">
                      <span className="ml-2 flex-1 w-0 truncate">
                        Añade un nuevo contacto
                      </span>
                    </div>
                  </li>
                </ul>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </View>
  );
};

export default ProviderDetails;