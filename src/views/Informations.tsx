import { InformationCircleIcon } from '@heroicons/react/24/outline';
import PageTitle from '../components/PageTitle';
import Button from '../components/Button';

export default function Informations() {
    return (
        <>
            <PageTitle title={'information'} icon={<InformationCircleIcon />} />
            <section>
                <p>
                    {`The first iteration of this application made with React Native 
                    as a hand-in project in for Mobile Developtment class in inversity. `}
                </p>
                <p>
                    {`For practice I updated the API of the mobile app thus it completely broke so in regard 
                        this issue I built the web version of the application as a hobby project in React with Framer Motion library.`}
                </p>
                <p>
                    {
                        'The API is fully open source too, using open source images scraped from GitHub.'
                    }
                </p>

                <div
                    className={
                        'flex justify-around mt-10 gap-3 flex-col md:flex-row'
                    }
                >
                    <Button
                        text={'React Native app repository'}
                        redirect={
                            'https://github.com/zsoltgombocz/anime-girls-with-book-react-native'
                        }
                    />
                    <Button
                        text={'React web app repository'}
                        redirect={
                            'https://github.com/zsoltgombocz/anime-girls-with-books'
                        }
                    />
                    <Button
                        text={'Anime Girls With Books API'}
                        redirect={
                            'https://github.com/zsoltgombocz/anime-girls-with-book-api'
                        }
                    />
                </div>
            </section>
        </>
    );
}
