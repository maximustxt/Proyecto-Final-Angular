import { PipeNombreApellidoPipe } from './pipe-nombre-apellido.pipe';

describe('PipeNombreApellidoPipe', () => {
  it('create an instance', () => {
    const pipe = new PipeNombreApellidoPipe();
    expect(pipe).toBeTruthy();
  });
});
