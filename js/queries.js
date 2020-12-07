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
    }
module.exports = {
	getticketbycode:getticketbycode,
	getticketbyname:getticketbyname,
	removeticket:removeticket,
	backupticket:backupticket,
	tickettrash:tickettrash,
	restoreticket:restoreticket,
  ticketsamount:ticketsamount,
  removedeletedticket:removedeletedticket,
  getdeletedticketbycode:getdeletedticketbycode
}
