export async function graphqlFetcher<T = any>(
    query: string,
    variables: Record<string, unknown> = {}
): Promise<T> {
    const endpoint = import.meta.env.WP_GRAPHQL_ENDPOINT;

    const res = await fetch(endpoint, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ query, variables }),
    });

    if (!res.ok) throw new Error(`GraphQL fetch failed: ${res.status} ${res.statusText}`);

    const json = await res.json();
    if (json.errors) throw new Error(JSON.stringify(json.errors));

    return json.data as T;
}
