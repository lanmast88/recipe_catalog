let recipes = []

// GET /api/recipes
export const getAll = (req, res) => {
  if (req.query.search) {
    const filtered = recipes.filter(r =>
      r.title.toLowerCase().includes(req.query.search.toLowerCase())
    )
    return res.json(filtered)
  }

  res.json(recipes)
}

// POST /api/recipes
export const addRecipe = (req, res) => {
  const { title, desc } = req.body
  if (!title || !desc) {
    return res.status(400).json({ error: 'Missing fields' })
  }

  const recipe = {
    id: recipes.length + 1,   // теперь ID — обычный последовательный номер
    title,
    desc
  }

  recipes.push(recipe)
  res.json(recipe)
}

// GET /api/recipes/:id
export const getOne = (req, res) => {
  const id = Number(req.params.id) // приводим id к числу
  const recipe = recipes.find(r => r.id === id)

  if (!recipe) {
    return res.status(404).json({ error: 'Not found' })
  }

  res.json(recipe)
}

// DELETE /api/recipes/:id
export const deleteRecipe = (req, res) => {
  const id = Number(req.params.id)
  const index = recipes.findIndex(r => r.id === id)

  if (index === -1) {
    return res.status(404).json({ error: 'Not found' })
  }

  const removed = recipes.splice(index, 1)
  res.json(removed[0])
}
