import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function NotasApp() {
  const [nota, setNota] = useState({ titulo: '', conteudo: '' });
  const [notas, setNotas] = useState([]);

  const adicionarNota = () => {
    if (nota.titulo.trim() && nota.conteudo.trim()) {
      setNotas([...notas, nota]);
      setNota({ titulo: '', conteudo: '' });
    }
  };

  return (
    <div className="p-6 max-w-3xl mx-auto grid gap-4">
      <Card>
        <CardContent className="p-4 grid gap-2">
          <h2 className="text-xl font-bold">Nova Nota</h2>
          <Input
            placeholder="Título"
            value={nota.titulo}
            onChange={(e) => setNota({ ...nota, titulo: e.target.value })}
          />
          <Textarea
            placeholder="Escreva sua nota aqui..."
            value={nota.conteudo}
            onChange={(e) => setNota({ ...nota, conteudo: e.target.value })}
          />
          <Button onClick={adicionarNota}>Salvar Nota</Button>
        </CardContent>
      </Card>

      <div className="grid gap-4">
        {notas.map((n, idx) => (
          <Card key={idx}>
            <CardContent className="p-4">
              <h3 className="text-lg font-semibold">{n.titulo}</h3>
              <p className="text-gray-700 whitespace-pre-wrap">{n.conteudo}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
