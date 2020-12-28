    getticketbycode = obj => {
      sql = 'select id,status,kdticket,clientname from tickets '
      sql+= 'where kdticket="'+obj.kdticket+'" '
      console.log('getticketbycode',sql)
      return sql
    },
    getdeletedticketbycode = obj => {
      sql = 'select id,status,kdticket,clientname from deletedtickets '
      sql+= 'where kdticket="'+obj.kdticket+'" '
      console.log('getdeletedticketbycode',sql)
      return sql
    }
    getticketbyname = obj => {
      sql = 'select id,status,kdticket,clientname from tickets '
      sql+= 'where clientname like "%'+obj.clientname+'%" '
      console.log('getticketbyname',sql)
      return sql
    },
    removeticket = obj => {
      sql = 'delete from tickets '
      sql+= 'where id='+obj.id
      console.log('delete ticket',sql)
      return sql
    },
    backupticket = obj => {
      sql = 'insert into deletedtickets '
      sql+= 'select * from tickets where id='+obj.id
      console.log('backup ticket',sql)
      return sql
    },
    tickettrash = obj => {
      sql = 'select id,kdticket,clientname from deletedtickets '
      sql+= 'limit ' + obj.segment + ',' + obj.offset
      console.log('show trash',sql)
      return sql
    },
    restoreticket = obj => {
      sql = 'insert into tickets '
      sql+= 'select * from deletedtickets '
      sql+= 'where id='+obj.id
      console.log('restore ticket',sql)
      return sql
    },
    updateTicketCodeById = obj => {
      sql = 'update tickets set kdticket='+obj.kdticket+' '
      sql+= 'where id='+obj.id
      console.log('update after restore',sql)
      return sql
    }
    removedeletedticket = obj => {
      sql = 'delete from deletedtickets '
      sql+= 'where id='+obj.id
      console.log('remove deleted ticket',sql)
      return sql
    },
    ticketsamount = obj => {
      sql = 'select count(id) cnt from tickets '
      sql+= 'where status='+obj.status
      console.log('tickets amount'+obj.status,sql)
      return sql
    },
    getfu = obj => {
      sql = 'select a.id,a.followUpDate,a.picname,a.position,a.picphone,a.result,a.description,a.conclusion,b.name cause from '
      sql+= 'ticket_followups a left outer join ticketcauses b on b.id=a.cause_id '
      sql+= 'where ticket_id='+obj.ticket_id
      console.log('getfu',sql)
      return sql
    },
    removefu = obj => {
      sql = 'delete from ticket_followups '
      sql+= 'where id='+obj.id
      console.log('remove fu',sql)
      return sql
    },
    backupfu = obj => {
      sql = 'insert into deletedticket_followups '
      sql+= 'select * from ticket_followups where id='+obj.id+' '
      console.log('backupfu',sql)
      return sql
    }
module.exports = {
  removefu:removefu,
  backupfu:backupfu,
  getfu:getfu,
	getticketbycode:getticketbycode,
	getticketbyname:getticketbyname,
	removeticket:removeticket,
	backupticket:backupticket,
	tickettrash:tickettrash,
	restoreticket:restoreticket,
  ticketsamount:ticketsamount,
  removedeletedticket:removedeletedticket,
  getdeletedticketbycode:getdeletedticketbycode,
  updateTicketCodeById:updateTicketCodeById
}
