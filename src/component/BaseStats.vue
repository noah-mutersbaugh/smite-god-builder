<template>
  <div class="row">
    <div>
      <h1>Stats</h1>
      <table class="table" id="statsTable">
        <thead>
          <tr>
            <th scope="col" style="text-align: center; width: 10rem;">
                Name
            </th>
            <th scope="col" style="text-align: center; width: 10rem;">
                Health
            </th>
            <th scope="col" style="text-align: center; width: 10rem;">
                Mana
            </th>
            <th scope="col" style="text-align: center; width: 10rem;">
                Base Attack Damage
            </th>
            <th scope="col" style="text-align: center; width: 10rem;">
                Physical Protections
            </th>
            <th scope="col" style="text-align: center; width: 10rem;">
                HP5
            </th>
            <th scope="col" style="text-align: center; width: 10rem;">
                MP5
            </th>
            <th scope="col" style="text-align: center; width: 10rem;">
                Attack Speed
            </th>
            <th scope="col" style="text-align: center; width: 10rem;">
                Movement Speed
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="text-align: center;">{{ name }}</td>
            <td style="text-align: center;">{{ health }}</td>
            <td style="text-align: center;">{{ mana }}</td>
            <td style="text-align: center;">{{ baseAtkDamage }}</td>
            <td style="text-align: center;">{{ phyProtect }}</td>
            <td style="text-align: center;">{{ hp5 }}</td>
            <td style="text-align: center;">{{ mp5 }}</td>
            <td style="text-align: center;">{{ atkSpeed }}</td>
            <td style="text-align: center;">{{ moveSpeed }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    "name",
    "health",
    "mana",
    "baseAtkDamage",
    "phyProtect",
    "hp5",
    "mp5",
    "atkSpeed",
    "moveSpeed"
  ]
};
</script>