export default {
  /**************
  method: systems
  params: packet
  describe: The global systems feature that installs with every agent
  ***************/
  systems(packet) {
    this.context('feature');
    return new Promise((resolve, reject) => {
      const systems = this.systems();
      const agent = this.agent();
      const global = [];
      systems.global.forEach((item,index) => {
        global.push(`::begin:global:${item.key}:${item.id}`);
        for (let x in item) {
          global.push(`${x}: ${item[x]}`);
        }
        global.push(`::end:global:${item.key}:${this.lib.hash(item)}`);
      });
      const concerns = [];
      systems.concerns.forEach((item, index) => {
        concerns.push(`${index + 1}. ${item}`);
      })
    
      const info = [
        '::BEGIN:SYSTEMS',
        '### Client',
        `::begin:client:${systems.client_id}`,
        `id: ${systems.client_id}`,
        `client: ${systems.client_name}`,
        '**concerns**',
        concerns.join('\n'),
        `::end:client:${this.lib.hash(systems)}`,
        '### Global',
        global.join('\n'),
        '::END:SYSTEMS',
      ].join('\n');
      this.question(`${this.askChr}feecting parse ${info}`).then(feecting => {
        return resolve({
          text: feecting.a.text,
          html: feecting.a.html,
          data: systems.concerns,
        });
      }).catch(err => {
        return this.error(err, packet, reject);
      });
    });
  },
};
