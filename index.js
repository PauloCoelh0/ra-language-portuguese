module.exports = {
  ra: {
    action: {
      add_filter: "Adicionar Filtro",
      add: "Adicionar",
      back: "Voltar",
      bulk_actions: "1 item selecionado |||| %{smart_count} itens selecionados",
      cancel: "Cancelar",
      clear_input_value: "Limpar campo",
      clone: "Duplicar",
      confirm: "Confirmar",
      create: "Novo",
      create_item: "Novo %{item}",
      delete: "Deletar",
      edit: "Editar",
      export: "Exportar",
      list: "Listar",
      refresh: "Atualizar",
      remove_filter: "Cancelar filtro",
      remove: "Excluir",
      save: "Salvar",
      search: "Buscar",
      select_all: "Selecionar tudo",
      select_row: "Selecionar essa linha",
      show: "Exibir",
      sort: "Ordenar",
      undo: "Desfazer",
      unselect: "Desmarcar",
      expand: "Expandir",
      close: "Fechar",
      open_menu: "Abrir menu",
      close_menu: "Fechar menu",
      update: "Atualizar",
      move_up: "Mover para cima",
      move_down: "Mover para baixo",
      open: "Abrir",
      toggle_theme: "Alternar tema",
      select_columns: "Selecionar Colunas",
      clear_array_input: "Limpar lista",
      select_all_button: "Selecionar todos",
      remove_all_filters: "Remover todos os filtros",
    },
    boolean: {
      true: "Sim",
      false: "Não",
      null: " ",
    },
    page: {
      create: "Novo %{name}",
      dashboard: "Painel de Controle",
      edit: "%{name} #%{id}",
      error: "Um erro ocorreu",
      list: "Listar %{name}",
      loading: "Carregando",
      not_found: "Não encontrado",
      show: "%{name} #%{id}",
      empty: "Ainda não há nenhum registro em %{name}",
      invite: "Gostaria de criar um novo?",
      access_denied: "Acesso negado",
      authentication_error: "Erro de autenticação",
      placeholder_data_warning: "Problema de rede: falha na atualização de dados.",
    },
    input: {
      file: {
        upload_several:
          "Arraste alguns arquivos para fazer o upload, ou clique para selecioná-los.",
        upload_single:
          "Arraste o arquivo para fazer o upload, ou clique para selecioná-lo.",
      },
      image: {
        upload_several:
          "Arraste algumas imagens para fazer o upload ou clique para selecioná-las",
        upload_single:
          "Arraste um arquivo para upload ou clique em selecionar arquivo.",
      },
      references: {
        all_missing: "Não foi possível encontrar os dados das referencias.",
        many_missing:
          "Pelo menos uma das referências passadas não está mais disponível.",
        single_missing:
          "A referência passada aparenta não estar mais disponível.",
      },
      password: {
        toggle_visible: "Esconder senha",
        toggle_hidden: "Mostrar senha",
      },
    },
    message: {
      about: "Sobre",
      are_you_sure: "Tem certeza?",
      bulk_delete_content:
        "Você tem certeza que deseja excluir este %{name}? |||| Você tem certeza que deseja excluir estes %{smart_count} itens?",
      bulk_delete_title:
        "Excluir %{name} |||| Excluir %{smart_count} %{name} itens",
      bulk_update_content:
        "Tem certeza que quer atualizar este %{name}? |||| Tem certeza que quer atualizar estes %{smart_count} itens?",
      bulk_update_title:
        "Atualizar %{name} |||| Atualizar %{smart_count} %{name}",
      delete_content: "Você tem certeza que deseja excluir?",
      delete_title: "Excluir %{name} #%{id}",
      details: "Detalhes",
      error: "Um erro ocorreu e a sua requisição não pôde ser completada.",
      invalid_form:
        "Este formulário não está valido. Certifique-se de corrigir os erros",
      loading: "A página está carregando. Um momento, por favor",
      no: "Não",
      not_found:
        "Foi digitada uma URL inválida, ou o link pode estar quebrado.",
      yes: "Sim",
      unsaved_changes:
        "Algumas das suas mudanças não foram salvas, deseja realmente ignorá-las?",
      auth_error: "Erro na autorização",
    },
    navigation: {
      no_results: "Nenhum resultado encontrado",
      no_more_results:
        "A página numero %{page} está fora dos limites. Tente a página anterior.",
      page_out_of_boundaries: "Página %{page} fora do limite",
      page_out_from_end: "Não é possível ir após a última página",
      page_out_from_begin: "Não é possível ir antes da primeira página",
      page_range_info: "%{offsetBegin}-%{offsetEnd} de %{total}",
      partial_page_range_info:
        "%{offsetBegin}-%{offsetEnd} de mais de %{offsetEnd}",
      current_page: "Página %{page}",
      page: "Ir para página %{page}",
      first: "Ir para a primeira página",
      last: "Ir para a última página",
      next: "Próximo",
      prev: "Anterior",
      page_rows_per_page: "Linhas por página:",
      skip_nav: "Pular para o conteúdo",
      clear_filters: "Limpar filtros",
      no_filtered_results: "Nenhum resultado encontrado para o filtro",
    },
    sort: {
      sort_by: "Ordenar por %{field} %{order}",
      ASC: "crescente",
      DESC: "decrescente",
    },
    auth: {
      auth_check_error: "Por favor, faça login para continuar",
      user_menu: "Perfil",
      username: "Usuário",
      password: "Senha",
      sign_in: "Entrar",
      sign_in_error: "Erro na autenticação, tente novamente.",
      logout: "Sair",
    },
    notification: {
      updated:
        "Item atualizado com sucesso |||| %{smart_count} itens foram atualizados com sucesso",
      created: "Item criado com sucesso",
      deleted:
        "Item removido com sucesso! |||| %{smart_count} itens foram removidos com sucesso",
      bad_item: "Item incorreto",
      item_doesnt_exist: "Esse item não existe mais",
      http_error: "Erro na comunicação com servidor.",
      data_provider_error:
        "Erro do dataProvider, verifique o console para mais detalhes.",
      i18n_error:
        "Não foi possível carregar as traduções para o idioma especificado.",
      canceled: "Ação cancelada.",
      logged_out: "Sua sessão foi encerrada. Por favor, reconecte.",
      not_authorized: "Você não tem autorização para acessar esse recurso.",
      application_update_available: "Uma nova versão está disponível.",
    },
    validation: {
      required: "Obrigatório",
      minLength: "Deve ser ter no mínimo %{min} caracteres",
      maxLength: "Deve ter no máximo %{max} caracteres",
      minValue: "Deve ser %{min} ou maior",
      maxValue: "Deve ser %{max} ou menor",
      number: "Deve ser um número",
      email: "Deve ser um email válido",
      oneOf: "Deve ser uma das seguintes opções: %{options}",
      regex: "Deve ter o formato específico (regexp): %{pattern}",
    },
    saved_queries: {
      label: "Pesquisas salvas",
      query_name: "Nome da pesquisa",
      new_label: "Salvar a pesquisa atual...",
      new_dialog_title: "Salvar pesquisa como",
      remove_label: "Remover pesquisa salva",
      remove_label_with_name: 'Remover pesquisa "%{name}"',
      remove_dialog_title: "Remover pesquisa salva?",
      remove_message:
        "Tem certeza que deseja remover esse item da sua lista de pesquisas salvas?",
      help: "Filtrar os resultados e salvar essa pesquisa para depois.",
    },
    configurable: {
      customize: "Customizar",
      configureMode: "Configurar esta página",
      Datagrid: {
        unlabeled: "Coluna sem rótulo #%{column}",
        title: "#%{title}",
      },
      inspector: {
        title: "Inspetor",
        content: "Passe o mouse sobre os elementos da interface do usuário do aplicativo para configurá-los",
        reset: "Redefinir configurações",
        hideAll: "Esconder tudo",
        showAll: "Exibir tudo",
      },
      SimpleList: {
        primaryText: "Texto primário",
        secondaryText: "Texto secundário",
        tertiaryText: "Texto terciário",
        title: "#%{title}",
      },
      SimpleForm: {
        title: "#%{title}",
        unlabeled: "Sem rótulo #%{column}",
      },
    },
  },
};
