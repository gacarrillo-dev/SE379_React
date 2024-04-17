import useFetch from "../hooks/useFetch.js";
import Loading from "./Loading.jsx";

const FetchingData = () => {
    const { data, error, loading } = useFetch('posts');

    if (loading) {
        return <Loading />;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <>
            <h1>Posts</h1>
            {data?.map((post) => {
                return (
                    <div key={post.id}>
                        <h2>{post.title}</h2>
                        <p>id: {post.id}</p>
                        <p>{post.body}</p>
                    </div>
                );
            })}
        </>
    );
};

export default FetchingData;