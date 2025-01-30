export default {
  /**************
  method: service
  params: packet
  describe: The global service feature that installs with every agent
  ***************/
  systems(packet) {
    this.context('feature');
    const systems = this.systems();
    const data = {};
    return new Promise((resolve, reject) => {
      this.question(`#docs raw feature/systems`).then(doc => {
        data.doc = doc.a.data;
        const info = [
          `## Systems`,
          `::begin:systems:${systems.id}`,
          `client: ${systems.client_name}`,
          `concerns: ${systems.concerns.join(', ')}`,
          `::end:systems:${this.hash(systems)}`,
        ].join('\n');
        const text = doc.a.text.replace(/::info::/g, info)
        return this.question(`#feecting parse ${text}`)
      }).then(feecting => {
        return resolve({
          text: feecting.a.text,
          html: feecting.a.html,
          data: systems
        });
      }).catch(err => {
        return this.error(err, packet, reject);
      })
    });
  },
};
