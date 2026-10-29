#!/usr/bin/env python3
"""
Validador del catalogo de Punto Hogar Pijamas
Verifica que catalogo.js exista y tenga estructura básica.
"""

import sys
import re

def validar_catalogo():
    try:
        with open('catalogo.js', 'r', encoding='utf-8') as f:
            contenido = f.read()
        
        # Verificar que tiene la estructura básica
        if 'const CATALOGO_IKI=[' not in contenido:
            print("ERROR: No se encontro 'const CATALOGO_IKI=['")
            return False
        
        if not contenido.strip().endswith('];'):
            print("ERROR: El archivo no termina con '];'")
            return False
        
        # Contar productos aproximadamente (cada producto tiene 'id:')
        count = contenido.count('id:"')
        if count == 0:
            count = contenido.count("id:'")
        if count == 0:
            print("ERROR: No se encontraron productos")
            return False
        
        # Verificar categorías presentes
        categorias = set()
        for cat in ['pijamas', 'conjuntos', 'pantalones', 'shorts', 'interior', 'enterizos', 'ninos', 'navidad']:
            if f'cat:"{cat}"' in contenido or f"cat:'{cat}'" in contenido:
                categorias.add(cat)
        
        print(f"OK: Catalogo basico valido")
        print(f"Productos aproximados: {count}")
        print(f"Categorias detectadas: {', '.join(sorted(categorias))}")
        return True
        
    except Exception as e:
        print(f"ERROR: {e}")
        return False

if __name__ == '__main__':
    exito = validar_catalogo()
    sys.exit(0 if exito else 1)