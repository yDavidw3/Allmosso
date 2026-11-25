import * as SQLite from 'expo-sqlite';
import { ENDERECOS, PAGAMENTOS } from '../components/data';

// guarda o banco aberto pra não abrir de novo toda vez que uma tela precisar dele
let dbPromise = null;

export function getDb() {
  if (!dbPromise) dbPromise = abrirBanco();
  return dbPromise;
}

// abre (ou cria, se ainda não existir) o arquivo allmosso.db e garante que a tabela existe
async function abrirBanco() {
  const db = await SQLite.openDatabaseAsync('allmosso.db');

  // execAsync roda um ou mais comandos SQL sem parâmetros. aqui ele cria a tabela de endereços
  // INTEGER PRIMARY KEY AUTOINCREMENT = o próprio banco gera o id (1, 2, 3...)
  // TEXT NOT NULL = campo de texto obrigatório
  await db.execAsync(`
    CREATE TABLE IF NOT EXISTS enderecos (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      apelido TEXT NOT NULL,
      rua TEXT NOT NULL,
      complemento TEXT,
      icone TEXT NOT NULL,
      cor TEXT NOT NULL,
      tag TEXT
    );
    CREATE TABLE IF NOT EXISTS pagamentos (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      tipo TEXT NOT NULL,
      descricao TEXT NOT NULL,
      vencimento TEXT,
      icone TEXT NOT NULL,
      cor TEXT NOT NULL,
      tag TEXT
    );
  `);

  // na primeira vez que o app abre a tabela está vazia, então coloca os endereços que já estavam no data.js
  const primeiro = await db.getFirstAsync('SELECT id FROM enderecos LIMIT 1;');
  if (!primeiro) {
    for (const e of ENDERECOS) {
      await db.runAsync(
        'INSERT INTO enderecos (apelido, rua, complemento, icone, cor, tag) VALUES (?, ?, ?, ?, ?, ?);',
        [e.apelido, e.rua, e.complemento, e.icone, e.cor, e.tag]
      );
    }
  }

  // mesma ideia pros pagamentos: se a tabela estiver vazia, coloca os do data.js
  const primeiroPag = await db.getFirstAsync('SELECT id FROM pagamentos LIMIT 1;');
  if (!primeiroPag) {
    for (const p of PAGAMENTOS) {
      await db.runAsync(
        'INSERT INTO pagamentos (tipo, descricao, vencimento, icone, cor, tag) VALUES (?, ?, ?, ?, ?, ?);',
        [p.tipo, p.descricao, p.vencimento, p.icone, p.cor, p.tag]
      );
    }
  }

  return db;
}

// READ: busca todos os endereços (sem parâmetro)
export async function listarEnderecos() {
  const banco = await getDb();
  return banco.getAllAsync('SELECT * FROM enderecos ORDER BY id;');
}

// READ com parâmetro: busca só um endereço pelo id. o ? é trocado pelo valor do array
export async function buscarEndereco(id) {
  const banco = await getDb();
  return banco.getFirstAsync('SELECT * FROM enderecos WHERE id = ?;', [id]);
}

// CREATE: runAsync é usado pra INSERT, UPDATE e DELETE. os ? evitam SQL injection
export async function inserirEndereco({ apelido, rua, complemento, icone, cor, tag }) {
  const banco = await getDb();
  await banco.runAsync(
    'INSERT INTO enderecos (apelido, rua, complemento, icone, cor, tag) VALUES (?, ?, ?, ?, ?, ?);',
    [apelido, rua, complemento, icone, cor, tag || '']
  );
}

// UPDATE: altera os dados do endereço que tem esse id
export async function atualizarEndereco(id, { apelido, rua, complemento, icone, cor }) {
  const banco = await getDb();
  await banco.runAsync(
    'UPDATE enderecos SET apelido = ?, rua = ?, complemento = ?, icone = ?, cor = ? WHERE id = ?;',
    [apelido, rua, complemento, icone, cor, id]
  );
}

// DELETE: apaga o endereço que tem esse id
export async function excluirEndereco(id) {
  const banco = await getDb();
  await banco.runAsync('DELETE FROM enderecos WHERE id = ?;', [id]);
}

// ---------- PAGAMENTOS (mesmo CRUD dos endereços, só muda a tabela e as colunas) ----------

// READ: todas as formas de pagamento
export async function listarPagamentos() {
  const banco = await getDb();
  return banco.getAllAsync('SELECT * FROM pagamentos ORDER BY id;');
}

// READ com parâmetro: uma forma de pagamento pelo id
export async function buscarPagamento(id) {
  const banco = await getDb();
  return banco.getFirstAsync('SELECT * FROM pagamentos WHERE id = ?;', [id]);
}

// CREATE
export async function inserirPagamento({ tipo, descricao, vencimento, icone, cor, tag }) {
  const banco = await getDb();
  await banco.runAsync(
    'INSERT INTO pagamentos (tipo, descricao, vencimento, icone, cor, tag) VALUES (?, ?, ?, ?, ?, ?);',
    [tipo, descricao, vencimento, icone, cor, tag || '']
  );
}

// UPDATE
export async function atualizarPagamento(id, { tipo, descricao, vencimento, icone, cor }) {
  const banco = await getDb();
  await banco.runAsync(
    'UPDATE pagamentos SET tipo = ?, descricao = ?, vencimento = ?, icone = ?, cor = ? WHERE id = ?;',
    [tipo, descricao, vencimento, icone, cor, id]
  );
}

// DELETE
export async function excluirPagamento(id) {
  const banco = await getDb();
  await banco.runAsync('DELETE FROM pagamentos WHERE id = ?;', [id]);
}
