import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom';
import Spinner from '../components/Spinner.jsx';
import { FaSyncAlt } from 'react-icons/fa';

const JobPage = () => {
    const {id} = useParams();
    const [job, setJob] = useState(null);
    const [ loading, setLoading ] = useState(true);

    useEffect(() => {
        const fetchJob = async () => {
            try {
                const res = await fetch(`/api/jobs/${id}`);
                const data = await res.json();
                console.log(data);
                setJob(data);
            } catch (error) {
                console.error("Error fetching job data:", error);
            }finally {
                setLoading(false);
            }
        }
        fetchJob();
    }, []);    
return (loading || !job) ? (
    <Spinner />
) : (
    <>
        <section className="bg-blue-50 px-4 py-10 min-h-screen">
            <div className="container-xl lg:container m-auto">
                    <article className="max-w-4xl mx-auto">
                        <div className="bg-white rounded-xl shadow-md p-6">
                        <header className="mb-6">
                            <h2 className="text-3xl font-bold text-indigo-600 mb-2">
                                {job.title}
                            </h2>
                            {job.company && (
                                <p className="text-sm text-gray-800 mb-1">
                                    {typeof job.company === 'string' ? job.company : job.company?.name ?? ''}
                                </p>
                            )}
                            <div className="text-sm text-gray-800">
                                <span className="mr-3">{job.type ?? 'N/A'}</span>
                                <span className="mr-3">{job.location ?? 'Remote'}</span>
                                <span>
                                    {job.salary ? `${job.salary} / Year` : 'Salary not disclosed'}
                                </span>
                            </div>
                        </header>
                            <section className="mb-6">
                                <h3 className="text-xl font-bold mb-2">Job Description</h3>
                                <p className="text-gray-700 whitespace-pre-line">
                                    {job.description ?? 'No description provided.'}
                                </p>
                            </section>

                            <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:gap-3 gap-2">
                                {job.company.contactEmail ? (
                                    <a href={`mailto:${job.company.contactEmail}`}
                                        className="inline-block px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 text-center"
                                    >
                                        Apply Now
                                    </a>
                                ) : (
                                    <button
                                        type="button"
                                        disabled
                                        className="inline-block px-4 py-2 bg-gray-300 text-gray-700 rounded-md text-center cursor-not-allowed"
                                    >
                                        Apply (not available)
                                    </button>
                                )}

                                <button
                                    type="button"
                                    onClick={() => window.history.back()}
                                    className="inline-block px-4 py-2 border border-indigo-600 text-indigo-600 rounded-md bg-white hover:bg-indigo-50"
                                >
                                    Back
                                </button>

                                <a
                                    onClick={() => window.location.reload()}
                                    className="inline-block px-4 py-2 ml-auto text-sm text-gray-600"
                                >
                                    <FaSyncAlt />
                                </a>
                            </div>
                        </div>
                    </article>
            </div>
        </section>
    </>
)
}

export default JobPage