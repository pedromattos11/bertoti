export default async function handler(req, res) {
    // Habilitar CORS
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
    );

    // Responder ao OPTIONS request (preflight)
    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    // Apenas permitir GET
    if (req.method !== 'GET') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const country = req.query.country;

        if (!country) {
            return res.status(400).json({ error: 'Country parameter is required' });
        }

        // Fazer requisição para a API externa
        const apiResponse = await fetch(
            `https://universities.hipolabs.com/search?country=${encodeURIComponent(country)}`,
            {
                headers: {
                    'Accept': 'application/json',
                },
            }
        );

        if (!apiResponse.ok) {
            throw new Error(`API responded with status: ${apiResponse.status}`);
        }

        const data = await apiResponse.json();

        // Retornar os dados com cache headers
        res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate');
        res.status(200).json(data);
    } catch (error) {
        console.error('Error fetching universities:', error);
        res.status(500).json({ 
            error: 'Failed to fetch universities',
            message: error.message 
        });
    }
}

