import { InformationCircleIcon } from '@heroicons/react/24/outline';
import PageTitle from '../components/PageTitle';
import Information from '../components/svg/Information';

export default function Informations() {
    return (
        <>
            <PageTitle title={'information'} icon={<InformationCircleIcon />} />
            <section>{'info text'}</section>
        </>
    );
}
