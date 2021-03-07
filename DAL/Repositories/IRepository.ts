export default interface IRepository
{
    // Para crear una entidad
    Create(TEntity: any): Promise<any>;
    // Para recuperar una entidad en base a un criterio
    Retrieve(Expression: any): Promise<any>;    
    // Para actualizar una entidad
    Update(id: any, TEntity: any): Promise<any>;
    // Para eliminar una entidad
    Delete(TEntity: any): Promise<any>;
}

